/*
const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  const Header = ({ course }) => {
    return <h1>{course}</h1>;
  };

  //Solo me va a mostrar el nombre y los ejercicios//
  const Part = ({ nombre, ejercicios }) => {
    return (
      <p>
        {nombre} - Numero de ejercicios: {ejercicios}
      </p>
    );
  };
  const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
    return (
      <div>
        <Part nombre={part1} ejercicios={exercises1} />
        <Part nombre={part2} ejercicios={exercises2} />
        <Part nombre={part3} ejercicios={exercises3} />
      </div>
    );
  };
  const Total = ({ a1, a2, a3 }) => {
    return <p>Number of exercises: {a1 + a2 + a3}</p>;
  };

  return (
    <div>
      <Header course={course} />

      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />

      <Total a1={exercises1} a2={exercises2} a3={exercises3} />
    </div>
  );
};

export default App;
*/