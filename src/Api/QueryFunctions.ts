export const getScore = async () => {
  const response = await fetch("http://localhost:3000/data")
    .then((res) => res.json())
    .then((data) => data && data);
  return response;
};

export const updateScore = async (score: number) => {
  const response = await fetch("http://localhost:3000/data", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      score,
    }),
  }).catch((err) => console.log(err));

  return response;
};
