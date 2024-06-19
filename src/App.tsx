function App() {
  return (
    <div className='app-container'>
      <div className='container-fluid p-0'>
        <nav className='navbar primary'>
          <div className='container-fluid'>
            <div className='navbar-brand'>
              <h2 className='fs-2 fw-bold'>Alliance DevOps Dashboard</h2>
            </div>
          </div>
        </nav>
      </div>
      <div className='container-fluid p-0 m-0'>
        <nav className='navbar light align-items-center border border-1'>
          <div className='container-fluid justify-content-between'>
            Breadcrumbs
            <div className='row'>
              <div className='col'>Teams</div>
              <div className='col'>Release</div>
              <div className='col'>Time</div>
            </div>
          </div>
        </nav>
      </div>
      <div className='container-fluid p-0 content-container'>
        {/* An <Outlet> renders whatever child route is currently active */}
        <div className='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          imperdiet libero eu neque facilisis.
        </div>
      </div>
    </div>
  );
}

export default App;
