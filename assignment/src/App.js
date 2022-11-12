import Content from './Content.json';

// let Assignment = Content.map(
//   assignment => {
//     return (
//       <div key={assignment.class} className="mt-3 p-3 border rounded shadow">
//         <h1 className="text-center">{assignment.class}</h1>
//         <p className="fst-italic">{assignment.description}</p>
//         <p className="fst-italic">{assignment.Containment}</p>
//         <p className="fst-italic">{assignment.item}</p>
//         <p className="text-center"><img src={assignment.image} alt="Assignment" className="border rounded" style={{ maxWidth: "450px" }}></img></p>;
//       </div>
//     );
//   }
// );
function App() {
   return (
    Content.map(
      assignment => {
        return (
          <div key={assignment.class} className="mt-3 p-3 border rounded shadow">
            <h1 className="text-center">{assignment.class}</h1>
            <p className="fst-italic">{assignment.description}</p>
            <p className="fst-italic">{assignment.Containment}</p>
            <p className="fst-italic">{assignment.item}</p>
            <p className="text-center"><img src={assignment.image} alt="Assignment" className="border rounded" style={{ maxWidth: "450px" }}></img></p>;
          </div>
        );
      }
    )

    //{ Assignment }


  )

}

export default App;
