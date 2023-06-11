import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, set0k] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(name,email,password,secret);

    try {
      const { data } = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
        secret,
      });
      set0k(data.ok);
    } catch (err) {
      toast.error(err.response.data);
    }

    // axios.post("http://localhost:8000/api/register",{
    //   name,
    //   email,
    //   password,
    //   secret,
    // })
    // .then((res)=> setOk (res.data.ok))
    // .catch((err)=> toast.error(err.response.data));
  };

  return (
    <div className="container">
      <div className="row py-5 bg-secondary  text-light">
        <div className="col text-light ">
          <h1>registration</h1>
        </div>
      </div>

      <div className="row py-5  ">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Pick up question
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              you can use this password rest
            </label>
            <input
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              type="text"
              className="form-control"
              placeholder="write here "
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
