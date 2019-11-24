// src/components/Profile.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    // <lxink href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <div class="container h-100">
        <br />
        <br />

        <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-sm-8 col-md-6 col-lg-4 my-auto">
                
                
                <div class="profile-card py-3 card shadow text-center">
                    <div class="card-body py-4">
                        <img class="profile-picture rounded-circle"  alt="user avatar" src={user.picture} />
                        <h2 class="text-warning h4 font-weight-bold mt-3 mb-1">
                        {user.name}
                        </h2>
                        <p class="text-muted text-uppercase font-weight-light">
                        {user.email}
                        </p>
                        {/* <p class="px-3 mt-4">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                        </p> */}
                        {/* <div class="d-flex social-section justify-content-center">
                            <a class="text-warning" href=""><i class="fa fa fa-instagram"></i></a>
                            <a class="text-warning" href=""><i class="fa fa fa-facebook"></i></a>
                            <a class="text-warning" href=""><i class="fa fa fa-twitter"></i></a>
                            <a class="text-warning" href=""><i class="fa fa fa-linkedin"></i></a>
                            <a class="text-warning" href=""><i class="fa fa fa-google-plus"></i></a>
                            <a class="text-warning" href=""><i class="fa fa fa-whatsapp"></i></a>
                        </div> */}
                    </div>
                </div>
                
                
                
            </div>
        </div>
    </div>
  );
};

export default Profile;