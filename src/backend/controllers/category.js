import Category from "../models/category";
import formidable from "formidable";
import _ from "lodash";

export const create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: `Thêm không thành công ${err}`,
      });
    }
    const { name, description } = fields;
    if (!name) {
      return res.status(400).json({
        error: "Bạn cần nhập đầy đủ thông tin",
      });
    }
    let category = new Category(fields);
    category.save((err, data) => {
      if (err) {
        res.status(400).json({
          error: `Không thêm được - ${err}`,
        });
      }
      res.json(data);
    });
  });
};

export const lists = (req, res) => {
  Category.find((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "Danh mục không tồn tại",
      });
    }
    res.json(categories);
  });
};

export const categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      res.status(400).json({
        error: "Không tìm thấy danh mục",
      });
    }
    req.category = category;
    next();
  });
};

export const read = (req, res) => {
  return res.json(req.category);
};

export const remove = (req, res) => {
  let category = req.category;
  category.remove((err, deleteCategory) => {
    if (err) {
      res.status(400).json({
        error: err,
      });
    }
    res.json({
      deleteCategory,
      message: "Xóa danh mục thành công",
    });
  });
};

export const update = (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  // category.name = req.body.name;
  // category.description = req.body.description;
  // category.save((err, data) => {
  //   if (err || !category) {
  //     res.status(400).json({
  //       error: "Danh mục không tồn tại",
  //     });
  //   }
  //   res.json(data);
  // });

  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields) => {
    if (err) {
      return res.status(400).json({
        error: `Lỗi nè ${err}`,
      });
    }
    const { name, description } = fields;
    if (!name) {
      return res.status(400).json({
        error: "Bạn cần nhập đầy đủ thông tin",
      });
    }

    let category = req.category;
    category = _.assignIn(category, fields);

    category.save((err, data) => {
      if (err) {
        res.status(400).json({
          error: `Không thêm được sản phẩm - ${err}`,
        });
      }
      res.json(data);
    });
  });
};
