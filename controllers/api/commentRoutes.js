const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// /api/comment

//create a new comment
router.post('/', withAuth, async (req, res) => {
  console.log("hello")
  try {
    const newComment = await Comment.create({
      ...req.body,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//delete a user
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        //user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;