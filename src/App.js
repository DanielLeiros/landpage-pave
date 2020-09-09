import React, { useRef, useEffect, useState } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Splash from './views/Splash';

const App = () => {

  const childRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  let location = useLocation();

  useEffect(() => {
    atualizarPagina();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const atualizarPagina = async () => {
    await timeout(2500, () => null);
    setIsLoading(false);
    document.body.classList.add('is-loaded')
    childRef.current.init();
  }

  return (
    <>
      {
        isLoading ?
          <Splash /> :
          <ScrollReveal
            ref={childRef}
            children={() => (
              <Switch>
                <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
              </Switch>
            )} />
      }
    </>
  );
}

export default App;