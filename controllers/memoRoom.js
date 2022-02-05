const createError = require("http-errors");

const User = require("../models/User");
const Memo = require("../models/Memo");
const MemoRoom =require("../models/MemoRoom");

exports.getMemoRoom = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const memoRooms = await User.findById(userId).populate("rooms");
    const memos = await Memo.find();

    const allTags = memos.map((memo) => {
      return memo.tags;
    }).flat(Infinity);

    const memoRoomInfo = memoRooms.rooms.map((room) => {
      const { _id, name } = room;

      return {
        _id,
        name,
      };
    });

    res.status(200).json({
      result: "success",
      tags: Array.from(new Set(allTags)),
      memoRooms: memoRoomInfo,
    });
  } catch (err) {
    if (err.name === "MongoServerError" || err.name === "ValidationError") {
      res.status(400).json({
        result: "fail",
        error: {
          message: "Database Error"
        },
      });

      return;
    }

    next(createError(500, "Invalid Server Error"));
  }
};
