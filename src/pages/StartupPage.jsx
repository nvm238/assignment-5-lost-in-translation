import RegisterForm from "../components/RegisterForm";

const StartupPage = () => {
  return (
    <div class="main">
      <div class="header-bar">
        <h2>Register</h2>
      </div>
      <div class="content">
        <h3>Get started here</h3>
        <h3>What is your name?</h3>
        <RegisterForm/>
      </div>
    </div>
  );
};

export default StartupPage;
