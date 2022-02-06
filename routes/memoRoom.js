const express = require("express");
const router = express.Router();

const memoRoomController = require("../controllers/memoRoom");

router.get("/:userId/memorooms", memoRoomController.getAllMemoRooms);
router.post("/:userId/memorooms", memoRoomController.addNewMemoRoom);
router.get("/:userId/memorooms/:memoroomId", memoRoomController.getMemoRoomTitle);
router.put("/:userId/memorooms/:memoroomId", memoRoomController.updateMemoRoomTitle);
router.delete("/:userId/memorooms/:memoroomId", memoRoomController.removeMemoRoom);
// router.post("/:userId/memorooms/:memoroomId/memo", memoRoomController.getMemoRoom);
// router.get("/:userId/memorooms/:memoroomId/memo/:memoId", memoRoomController.getMemoRoom);
// router.put("/:userId/memorooms/:memoroomId/:memoId", memoRoomController.getMemoRoom);
// router.delete("/:userId/memorooms/:memoroomId/:memoId", memoRoomController.getMemoRoom);

module.exports = router;
