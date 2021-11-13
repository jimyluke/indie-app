import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { BackTop } from "antd";

// Import miscellaneous routes and other requirements
import NotFound from "./components/pages/not-found";

// Import static pages
import LandingPage from "./containers/landing/index";
import CinersPage from "./containers/landing/ciners";
import HomePage from "./containers/home";
import Library from "./containers/library";
import SearchVideo from "./containers/library/search";
import VideoDetail from "./containers/library/movie";
import VideoPlayer from "./containers/library/player";
import SupportPage from "./containers/support";
import PrivacyPage from "./containers/privacyAndTerms/privacy";
import TermsPage from "./containers/privacyAndTerms/terms";
import ContactPage from "./containers/contact";

// Import authentication related pages
import Register from "./containers/auth/register/index";
import Login from "./containers/auth/login";
import Welcome from "./containers/auth/register/welcome";
import Logout from "./containers/auth/logout";
import ForgotPassword from "./containers/auth/forgot_password";
import ResetPassword from "./containers/auth/reset_password";
import Resend from "./containers/auth/resend";
import ConfirmEmail from "./containers/auth/confirm-email";
import Festival from "./containers/auth/register/festival";

// Import user related Pages
import Profile from "./containers/user/profile/index";

// Import admin related Pages
import AdminDashboard from "./containers/admin";

// Import chat related pages
import MessageBox from "./containers/message";

// Import notification pages
import Notification from "./containers/notification";

import Faq from "./containers/faq";

// Import higher order components
import RequireAuth from "./containers/auth/require_auth";
import { protectedTest } from "./actions/auth";
// import { fetchConversations } from "./actions/message";
// import { fetchNotifications } from "./actions/notification";
// import { listFieldData } from "./actions/profile";
import { fetchJWVideos } from "./actions/jwplayer";

class Routes extends React.Component {
  componentDidMount = async () => {
    await this.props.protectedTest();
    this.props.fetchJWVideos();
  };

  render() {
    return (
      <div className="layout">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/ciners" component={CinersPage} />
          <Route exact path="/home" component={RequireAuth(HomePage)} />
          <Route exact path="/library" component={RequireAuth(Library)} />
          <Route exact path="/videos/:media_id" component={VideoDetail} />
          <Route
            exact
            path="/videos/player/:media_id"
            component={VideoPlayer}
          />
          <Route exact path="/search" component={RequireAuth(SearchVideo)} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/welcome" component={RequireAuth(Welcome)} />
          <Route path="/forgot-password/:mode" component={ForgotPassword} />
          <Route
            path="/reset-password/:mode/:resetToken"
            component={ResetPassword}
          />
          <Route path="/resend" component={Resend} />
          <Route path="/email-verify/:mode/:token" component={ConfirmEmail} />
          <Route path="/profile" component={RequireAuth(Profile)} />
          <Route path="/festival" component={Festival} />

          <Route path="/admin" component={RequireAuth(AdminDashboard)} />
          <Route path="/message" component={RequireAuth(MessageBox)} />
          <Route path="/notification" component={RequireAuth(Notification)} />

          <Route path="/support" component={SupportPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/faq" component={Faq} />
          <Route path="*" component={NotFound} />
        </Switch>
        <BackTop />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, {
  protectedTest,
  fetchJWVideos,
})(Routes);
