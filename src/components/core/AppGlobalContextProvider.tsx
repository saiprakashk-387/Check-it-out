import React, { PropsWithRef, useEffect, useMemo, useState } from "react";

import GlobalContext from "./GlobalContext";
import IGlobalContext from "../../models/GlobalContext";
import DataService from "./DataService";
import ReferenceDataService from "./ReferenceDataService";

interface Props {
  children: React.ReactNode;
}

const GlobalDataProvider: React.FC<Props> = ({ children }) => {
  const [referenceData] = useState(new ReferenceDataService());
  const [dataService] = useState(new DataService());
  const [user, setUser] = useState(null);

  const ctxData = useMemo<IGlobalContext>(
    () => ({
      user,
      setUser,
      dataService,
      referenceData,
    }),
    [dataService, referenceData, user, setUser]
  );

  const init = () => {
    const getData = async () => {
      // get initial data if needed
      
    };
    setUser(true)
    
    getData();
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(init, []);

  return (
    <GlobalContext.Provider value={ctxData}>{children}</GlobalContext.Provider>
  );
};

export default GlobalDataProvider;
