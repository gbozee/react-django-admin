class Model {
  setChangelistHeading() {
    return this.fields.map(field => {
      let toTitle = field.split("_").join(" ");
      return { field, text: toTitle[0].toUpperCase() + toTitle.substring(1) };
    });
  }
}

export class Group extends Model {
  fields = ["username", "email", "first_name", "last_name", "is_staff"];
  static displayName = "Group";
  setChangelistHeading() {
    return [
      {
        field: "username",
        text: "Username"
      },
      { field: "email", text: "Email address" },
      { field: "first_name", text: "First name" },
      { field: "last_name", text: "Last name" },
      { field: "is_staff", text: "Staff status" }
    ];
  }
  getQueryset() {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: 1,
          username: "biola",
          email: "gbozee@example.com",
          first_name: "",
          last_name: "",
          is_staff: true
        }
      ]);
    });
  }
}

export class User extends Model {
  fields = ["username", "email", "first_name", "last_name", "is_staff"];
  static displayName = "User";
  getQueryset() {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: 1,
          username: "biola",
          email: "gbozee@example.com",
          first_name: "",
          last_name: "",
          is_staff: true
        }
      ]);
    });
  }
}

export class Todo extends Model {
  fields = ["username", "email", "first_name", "last_name", "is_staff"];
  static displayName = "Todo";
  getQueryset() {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: 1,
          username: "biola",
          email: "gbozee@example.com",
          first_name: "",
          last_name: "",
          is_staff: true
        }
      ]);
    });
  }
}
