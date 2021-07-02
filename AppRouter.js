    <Router>
      <div>
          <Navbar />

        <Switch>
          <Route exact path="/dc"  component={DcScreen}/>
          <Route exact path="/marvel"  component={MarvelScreen}/>
        </Switch>
      </div>
    </Router>
