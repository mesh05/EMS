const staff = () => {
  fetch("http://localhost:3000/staff/me", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((result) => {
    result.json().then((content) => {
      return content.user;
    });
  });
};

export default staff;
