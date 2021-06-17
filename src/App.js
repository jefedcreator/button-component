import "./App.css";
import Button from '@material-ui/core/Button';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function App() {
  return (
    <div className="container">
      <div className="firstDiv">
        <Button variant="contained">Default</Button>
      </div>
      <div className="firstDiv">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
      </div>
      <div className="firstDiv">
        <Button color="primary">Primary</Button>
      </div>
      <div className="firstDiv">
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div>
      <div className="firstDiv">
        <Button variant="contained" disabled>
          Disabled
        </Button>
      </div>
      <div className="firstDiv">
        <Button variant="contained" 
        // startIcon={<AddShoppingCartIcon/>}
        >
          Default
        </Button>
        <Button variant="contained"
        //  endIcon={<AddShoppingCartIcon/>}
         >
          Default
        </Button>
      </div>
      <div className="firstDiv">
        <Button variant="outlined" size="small" color="primary">
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary">
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary">
          Large
        </Button>
      </div>
      <div className="firstDiv">
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </div>
      <div className="firstDiv">
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </div>
    </div>
  );
}

// function Button(props) {
//   return (
//     <>
//       <button type="button" variant={props.variant} color={props.color}>
//         {props.Name}
//       </button>
//     </>
//   );
// }

export default App;