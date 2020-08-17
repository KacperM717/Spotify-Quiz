import React, { useState, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Grid, Paper, Divider } from "@material-ui/core";

export default function Question({ url, shuffledAnswers, onAnswerClick }) {
  //WRONGGGGGG!!!!!  Read about it in Dan's useEffect deepDive
  //And next thing is to fix grid to be aligned properly
  const [points, setPoints] = useState(3000);

  const pointsRef = useRef(points);

  useEffect(() => {
    pointsRef.current = points;
    const delayedPointsChange = setInterval(
      () => setPoints(points => (points > 0 ? points - 1 : 0)),
      10
    );
    return () => clearInterval(delayedPointsChange);
  }, []);

  function handleAnswerClick(id) {
    setPoints(3000);
    onAnswerClick(id, points);
  }

  return (
    <div>
      <audio src={url} autoPlay={true} />
      {/* Grid Container */}
      <Grid container spacing={3}>
        {/* Grid row */}
        <Grid container spacing={3}>
          {/* Grid column */}
          <Grid
            item
            xs={6}
            onClick={() => handleAnswerClick(shuffledAnswers[0].id)}
          >
            <Paper
              style={{
                textAlign: "center",
                height: "150px",
                fontSize: "40px",
                cursor: "pointer"
              }}
            >
              {shuffledAnswers[0].name}
            </Paper>
          </Grid>
          {/* Grid column */}
          <Grid
            item
            xs={6}
            onClick={() => handleAnswerClick(shuffledAnswers[1].id)}
          >
            <Paper
              style={{
                textAlign: "center",
                height: "150px",
                fontSize: "40px",
                cursor: "pointer"
              }}
            >
              {shuffledAnswers[1].name}
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            {" "}
            <Divider />
          </Grid>
          <Grid item>
            {" "}
            <Divider />
          </Grid>
        </Grid>
        {/* Grid row */}
        <Grid container spacing={3}>
          {/* Grid column */}
          <Grid
            item
            xs={6}
            onClick={() => handleAnswerClick(shuffledAnswers[2].id)}
          >
            <Paper
              style={{
                textAlign: "center",
                height: "150px",
                fontSize: "40px",
                cursor: "pointer"
              }}
            >
              {shuffledAnswers[2].name}
            </Paper>
          </Grid>
          {/* Grid column */}
          <Grid
            item
            xs={6}
            onClick={() => handleAnswerClick(shuffledAnswers[3].id)}
          >
            <Paper
              style={{
                textAlign: "center",
                height: "150px",
                fontSize: "40px",
                cursor: "pointer"
              }}
            >
              {shuffledAnswers[3].name}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
