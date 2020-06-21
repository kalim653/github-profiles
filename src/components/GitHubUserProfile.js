import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { USER_PROFILE_QUERY } from "../queries/UserProfile.query";

const GitHubUserProfile = (props) => {
  const { match } = props;

  const { data, error, loading } = useQuery(USER_PROFILE_QUERY, {
    fetchPolicy: "no-cache",
    variables: { login: match.params.userName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
          <div class="well profile">
            <div class="col-sm-12">
              <div class="col-xs-12 col-sm-8">
                <h2>{data.user.name || ""}</h2>
                <p>
                  <strong>User Name: </strong> {data.user.login || ""}{" "}
                </p>
                <p>
                  <strong>Email: </strong> {data.user.email || ""}
                </p>
                <p>
                  <strong>Location: </strong> {data.user.location || ""}
                </p>
                <p>
                  <strong>Bio: </strong> {data.user.bio || ""}
                </p>
                <p>
                  <strong>company: </strong> {data.user.company || ""}
                </p>
              </div>
              <div class="col-xs-12 col-sm-4 text-center">
                <figure>
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={data.user.avatarUrl}
                      alt="Card image cap"
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div class="col-xs-12 divider text-center">
              <div class="col-xs-12 col-sm-4 emphasis">
                <h2>
                  <strong> {data.user.followers.totalCount} </strong>
                </h2>
                <p>
                  <small>Followers</small>
                </p>
                <button class="btn btn-success btn-block">
                  <span class="fa fa-plus-circle"></span> Follow{" "}
                </button>
              </div>
              <div class="col-xs-12 col-sm-4 emphasis">
                <h2>
                  <strong>{data.user.following.totalCount}</strong>
                </h2>
                <p>
                  <small>Following</small>
                </p>
                <button class="btn btn-info btn-block">
                  <span class="fa fa-user"></span> View Profile{" "}
                </button>
              </div>
            </div>
            <div class="col-xs-12 col-sm-8">
              <p>
                <strong>Social Account: </strong>
                <span class="tags">
                  Twitter: {data.user.twitterUsername || "NA"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubUserProfile;
