const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// @desc Get contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc Get contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json(contact);
});

// @desc create contact
//@route POST /api/contacts/:id
//@access Public
const createContact = asyncHandler(async (req, res) => {
  const { Name, Email, Phone_Number } = req.body;
  if (!Name || !Email || !Phone_Number) {
    res.status(400);
    throw new Error("All fileds are mandatory!");
  }
  const contact = await Contact.create({
    Name,
    Email,
    Phone_Number,
  });
  res.status(201).json(contact);
});

// @desc update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updateContact);
});

// @desc delete contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await contact.remove();
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  getContact,
  updateContact,
  deleteContact,
  createContact,
};
