const signUp = (props) => {
  fetch("http://localhost:3000/signup", {
    method: "POST",
    body: JSON.stringify({
      staff_id: props.id,
      staff_name: props.name,
      staff_pass: props.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((result) => {
    result.json().then((content) => {
      console.log(content);
    });
  });
};

export default signUp;
