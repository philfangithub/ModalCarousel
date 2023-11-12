import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
        Open modal
      </button>

      {/*The Modal*/}
      <div class="modal" id="myModal">
       <div class="modal-dialog">
        <div class="modal-content">

      {/*Modal Header*/}
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/*Modal Body*/}
      <div class="modal-body">
        Modal body..
      </div>

      {/*Modal Footer*/}
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
      </header>
    </div>
  );
}

export default App;
