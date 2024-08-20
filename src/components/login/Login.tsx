import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/contexts/AuthContext";
import { loginSchema } from "../../validations";
import Footer from "../footer/Footer";
import "./Login.css";

function Login() {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = () => {
    setUser(true);
    localStorage.setItem("user", user.toString());
    navigate("/list");
  };

  return (
    <div className="container">
      <div className="text-3xl">Octet Movies App</div>
      <div className="card">
        <span className="text-2xl">Giriş Yap</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <input
              type="text"
              placeholder="Email"
              className="form-input"
              {...register("email")}
            ></input>
            <span className="error-message">{errors.email?.message}</span>
            <input
              type="password"
              placeholder="Şifre"
              className="form-input"
              {...register("password")}
            ></input>
            <span className="error-message">{errors.password?.message}</span>
          </div>
          <button disabled={!isValid} type="submit" className="btn">
            Giriş
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
