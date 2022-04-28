import { useLayoutEffect, useState } from "react";
import { BrowserRouterProps, Router } from "react-router-dom";
import { BrowserHistory } from "history";
import { history as customHistory } from "index";

interface CustomRouterProps extends BrowserRouterProps {
  history: BrowserHistory;
}

export const CustomRouter = ({
  basename,
  history,
  children,
}: CustomRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      navigator={customHistory}
      location={state.location}
      navigationType={state.action}
      basename={basename}
    >
      {children}
    </Router>
  );
};
