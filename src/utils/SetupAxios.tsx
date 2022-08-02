/**
 * https://gist.github.com/shooksm/ef77a1600bcb435a7d6d27367d778a98
 *   */
import { useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import ax from "./api";
import _get from "lodash-es/get";
import notificationHandler from "./notificationHHandler";
import GlobalContext from "components/core/GlobalContext";

const UndecoratedSetupAxios = ({ children }) => {
  const { user } = useContext(GlobalContext);

  /* request */
  const requestInterceptorSuccessHandler = async (config: any) => {
    return {
      ...config,
      headers: {
        ..._get(config, "headers", {}),
        Authorization: `Bearer ${user?.accessToken}`,
        "X-Request-Id": uuidv4(),
      },
    };
  };
  const requestInterceptorErrorHandler = (error: any) => Promise.reject(error);

  /* response */
  const responseInterceptorSuccessHandler = (response: any) => response;
  const responseInterceptorErrorHandler = (error: any) => {
    if (_get(error, "response.status") === 401) {
      notificationHandler.showErrorMessage(error?.message || error);
    }

    return Promise.reject(error);
  };

  /* lifecycle */
  useEffect(() => {
    if (!user?.isAuthenticated) return;

    const requestInterceptor = ax.interceptors.request.use(
      requestInterceptorSuccessHandler,
      requestInterceptorErrorHandler
    );
    const responseInterceptor = ax.interceptors.response.use(
      responseInterceptorSuccessHandler,
      responseInterceptorErrorHandler
    );

    return () => {
      ax.interceptors.request.eject(requestInterceptor);
      ax.interceptors.response.eject(responseInterceptor);
    };
  }, [user?.isAuthenticated]);

  return children;
};

export default UndecoratedSetupAxios;
