
const circleProgress = (id, value) => {
  var circleBar = new ProgressBar.Circle(id, {
    color: "#aaa",
    strokeWidth: 6,
    trailWidth: 7,
    trailColor: "white",
    easing: "easeInOut",
    from: { color: "#05ffbc", width: 7 },
    to: { color: "#ff0505", width: 7 },
    text: {
      className: "progress-text",
      style: {
        color: "black",
        position: "absolute",
        top: "46%",
        left: "45%",
        padding: 0,
        margin: 0,
        transform: null,
      },
    },
    step: (state, shape) => {
      shape.path.setAttribute("stroke", state.color);
      shape.path.setAttribute("stroke-width", state.width);
      // shape.setText(Math.round(shape.value() * 100) + ' %');
    },
  });

  circleBar.animate(value, {
    duration: 3000,
  });
};
/////////////


circleProgress("#commu-pg", 0.87);
circleProgress("#tw-pg", 0.79);
circleProgress("#pm-pg", 0.75);
circleProgress("#crea-pg", 0.7);

/////////////
// const lineProgress = (id, value) => {
//   var lineBar = new ProgressBar.Line(id, {
//     color: "#aaa",
//     strokeWidth: 6,
//     trailWidth: 7,
//     trailColor: "white",
//     easing: "easeInOut",
//     from: { color: "#05ffbc", width: 7 },
//     to: { color: "#ff0505", width: 7 },
//     text: {
//       className: "progress-text",
//       style: {
//         color: "black",
//         position: "absolute",
//         top: "46%",
//         left: "45%",
//         padding: 0,
//         margin: 0,
//         transform: null,
//       },
//     },
//     step: (state, shape) => {
//       shape.path.setAttribute("stroke", state.color);
//       shape.path.setAttribute("stroke-width", state.width);
//       // shape.setText(Math.round(shape.value() * 100) + ' %');
//     },
//   });

//   lineBar.animate(value, {
//     duration: 3000,
//   });
// };
// lineProgress("html-pg", 0.5);