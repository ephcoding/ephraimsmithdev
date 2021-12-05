import Branding from "./Branding";
import MainNav from "./MainNav";
import SocialNav from "./SocialNav";

export default function Header() {
  return (
    <header className="header">
      <Branding />
      <MainNav />
      <SocialNav />
    </header>
  );
}
