import Billing from "../models/billing";
import formidable from "formidable";
export const lists = (req, res) => {
  Billing.find((err, billing) => {
    if (err) {
      return res.status(400).json({
        error: "Billing không tồn tại",
      });
    }
    res.json(billing);
  });
};

export const create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: `Thêm không thành công ${err}`,
      });
    }

    let bill = new Billing(fields);
    bill.save((err, data) => {
      if (err) {
        res.status(400).json({
          error: `Không thêm được - ${err}`,
        });
      }
      res.json(data);
    });
  });
};

export const findById = async (req, res) => {
  const bill = await Billing.findById(req.params.id);
  res.json(bill);
};

export const editById = async (req, res) => {
  const bill = await Billing.findOneAndUpdate({ _id: req.params.id }, req.body);
  res.json(bill);
};

export const remove = async (req, res) => {
  Billing.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.json(`Xóa ô kê`);
    })
    .catch((err) => {
      err;
    });
};
