import "../../../src/styles/output.css";
import mtnLogo from "../../assets/mtn-logo.svg";

export const createLogin = ({
  primary = false,
  size,
  backgroundColor = "white",
  label,
  onChange,
}) => {
  const inp = `
<div class="body">
    <div>
    <div class='mtnGroup'>
        <img src= ${mtnLogo} alt="MTN"/>
        <div>Register to configure your device</div>
    </div>
    <form class='story-wrap'>
        <label>Device Username</label>
        <input type='text' class='storybook-form'placeholder="eg.Johnrouter" >
        <label class="w-20">Device Password</label>
        <input type='text' class='storybook-form'placeholder="eg.Johnrouter"/>
        <input class="button-submit" type="submit"/>
        <input class="button-reset" type="reset"/>
    </form>
    </div>
    <div>
    <hr />
    <footer class="footer">
        <div>Copyright Wicrypt All Right Reserved © 2023</div>
        <div>Powered By Wicrypt OS</div>
        <div>Firmware Version 2.0093 | Build 43344</div>
    </footer>
    </div>
</div>

`;
  return inp;
};
