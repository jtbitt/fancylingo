const functions = require("firebase-functions");
const admin = require("firebase-admin");
import {gql, GraphQLClient} from "graphql-request";
const cors = require("cors")({ origin: true });

admin.initializeApp(functions.config().firebase);
console.log(functions.config());

const client = new GraphQLClient("https://fancylingo.hasura.app/v1/graphql", {
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": functions.config().hasura.adminkey,
  },
});

const updateClaims = (uid: string) => admin.auth().setCustomUserClaims(uid, {
  "https://hasura.io/jwt/claims": {
    "x-hasura-default-role": "user",
    "x-hasura-allowed-roles": ["user"],
    "x-hasura-user-id": uid,
  },
});

exports.processSignUp = functions.auth.user().onCreate(async (user: any) => {
  updateClaims(user.uid);
  // add user lessons
  const mutation = gql`
    mutation($uid: String!) {
      insert_user_lessons(
        objects: [
          { lesson_id: 0, status: 0, user_id: $uid },
          { lesson_id: 1, status: 0, user_id: $uid },
          { lesson_id: 2, status: 1, user_id: $uid },
          { lesson_id: 3, status: 3, user_id: $uid },
          { lesson_id: 4, status: 2, user_id: $uid },
          { lesson_id: 5, status: 2, user_id: $uid },
          { lesson_id: 6, status: 3, user_id: $uid },
          { lesson_id: 1, status: 0, user_id: $uid },
        ], 
        on_conflict: { constraint: user_lesson_pkey, update_columns: [] }
      ) {
        affected_rows
      }
    }
  `;

  try {
    const data = await client.request(mutation, {uid: user.uid});
    console.log(data);

    return data;
  } catch (e) {
    throw new functions.https.HttpsError("invalid-argument", e.message);
  }
},

exports.refreshToken = functions.https.onRequest((req: any, res: any) => {
  cors(req, res, () => {
    updateClaims(req.query.uid).then(() => {
      res.status(200).send("success");
    }).catch((error: any) => {
      res.status(400).send(error);
    });
  });
}));
