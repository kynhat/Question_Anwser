import { CHECKQUESTION, CHECKANWER } from "../Actions";

const Quiz = {
  User: {
    user_name: "",
    email: "",
    option_1: "",
    option_2: "",
  },

  App: {
    is_loading: false,
    current_nav: null,
    is_refresh: false,
    questions: [
      {
        id: 123,
        cau: "ai an banh xeo dau tien",
      },
      {
        id: 333,
        cau: "chim gi khong bay tren troi",
      },
      {
        id: 444,
        cau: "ai hut thuoc lao dau tien",
      },
      {
        id: 666,
        cau: "ai di bay vao buoi sang",
      },
    ],
  },

  Nav: {
    state_id: null,
    can_next: false,
  },

  Question: {
    html: "",
    Anwers: [
      {
        id: 123,
        dapan: ["toi", "ban", "con meo", "ba ban banh xeo"],
      },
      {
        id: 333,
        dapan: ["chim canh cut", "chim da da", "chim cu meo", "chim gi ai bt"],
      },
      {
        id: 444,
        dapan: ["toi", "anh hang xom", "chu ban bao", "ong ban thuoc lao"],
      },
      {
        id: 666,
        dapan: ["dan bay", "toi", "chi toi", "gia dinh toi"],
      },
    ],
    is_handled: false,
  },

  Answer: {
    html: "",
    is_selected: false,
    ketquadung: [
      "ba ban banh xeo",
      "chim canh cut",
      "ong ban thuoc lao",
      "dan bay",
    ],
  },

  // Acknowlegde: {
  //  	content: '',
  //  	is_agreed: fasle,
  //  	is_read_all: false,
  // },

  // Timer: {
  // 	total_time: 20:00,
  // 	remain_time: 00:00,
  // 	actual_time:
  // },
};

export default (state = Quiz, action) => {
  switch (action.type) {
    case CHECKQUESTION:
      console.log("tesst id reduc", action);
      return {
        ...state,
        items: Quiz.Question.Anwers.filter(
          (item, index) => item.id === action.id
        ),
      };
    case CHECKANWER:
      // console.log("tesst id reduc", Quiz.Answer.ketquadung);
      return {
        ...state,
        items: Quiz.Question.Anwers.filter(
          (item, index) => item.id === action.id
        ),
      };

    default:
      return state;
  }
};