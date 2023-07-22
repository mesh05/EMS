const login = (props) => {
  fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify({
      staff_id: props.id,
      staff_pass: props.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((result) => {
    result.json().then((content) => {
      if (content.token) {
        localStorage.setItem("token", content.token);
      } else {
        localStorage.setItem("token", "");
      }
    });
  });
};

export default login;
