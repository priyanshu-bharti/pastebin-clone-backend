import { createPasteInDb, getAllPasteFromDb, getPasteByIdFromDb, deletePasteByIdFromDb, updatePasteToDb, getPasteByPasteIdFromDb, getAllUserPasteFromDb, } from "../Services/PasteService.js";
const getAllPastes = async (req, res) => {
    const allPastes = await getAllPasteFromDb(req.body.userId);
    res.status(200).json({ success: allPastes });
};
const getAllUserPastes = async (req, res) => {
    const allUserPastes = await getAllUserPasteFromDb(req.params.userId);
    res.status(200).json({ success: allUserPastes });
};
const getPasteById = async (req, res) => {
    try {
        const filteredPaste = await getAllPasteFromDb(req.body.userId);
        if (filteredPaste) {
            res.status(200).json({ success: filteredPaste });
        }
        else {
            res.status(400).json({ error: "No Record Found" });
        }
    }
    catch (err) {
        res.status(400).json({ error: "No Record Found" });
    }
};
const getPasteByPasteId = async (req, res) => {
    try {
        const result = await getPasteByPasteIdFromDb(req.params.id);
        if (result) {
            res.status(200).json({ success: result });
        }
        else {
            res.status(404).json({ error: "Paste Not Found" });
        }
    }
    catch (err) {
        res.status(400).json({ error: "Something Went Wrong" });
    }
};
const createPaste = async (req, res) => {
    const newPasteModel = req.body;
    const newPasteResult = await createPasteInDb(req.params.userId, newPasteModel);
    if (newPasteResult) {
        res.status(200).json({ success: newPasteResult });
    }
};
const deletePaste = async (req, res) => {
    const deletePaste = await deletePasteByIdFromDb(req.params.id);
    res.status(200).json({ success: deletePaste });
};
const updatePaste = async (req, res) => {
    try {
        const updatedPaste = await updatePasteToDb(req.body.pasteId, req.body);
        res.status(200).json({ success: updatedPaste });
    }
    catch (err) {
        res.status(400).json({ error: "Something Went Wrong" });
    }
};
export { getAllPastes, getPasteById, createPaste, updatePaste, deletePaste, getPasteByIdFromDb, getPasteByPasteId, getAllUserPastes, };
//# sourceMappingURL=PasteController.js.map