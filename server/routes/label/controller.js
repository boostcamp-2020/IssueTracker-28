const labelServices = require('../../services/label');

/*
    GET /api/label/list
    * 전체 라벨 목록 조회 API
*/
exports.getLabels = async(req, res, next) => {
    try {
        const labels = await labelServices.getLabels();

        res.json({
            message: '전체 라벨 목록 조회 성공',
            data: labels,
        });
    } catch (error) {
        next(error);
    }
};

/*
    POST /api/label
    * 새로운 라벨 생성 API
*/
exports.createLabel = async(req, res, next) => {
    try {
        const { name, desc, color } = req.body;
        const label = await labelServices.createLabel({ name, desc, color });
        res.json({
            message: '새로운 라벨 생성 성공',
            data: label
        });
    } catch (error) {
        next(error);
    }
};

/*
    PUT /api/label
    * 라벨 수정 API
*/
exports.updateLabel = async(req, res, next) => {
    try {
        const { id, name, desc, color } = req.body;
        const result = await labelServices.updateLabel({ id, name, desc, color });
        res.json({
            message: '라벨 수정 성공',
            data: result // [affected rows 개수, 바뀐 label element]
        });
    } catch (error) {
        next(error);
    }
};

/*
    DELETE /api/label
    * 라벨 삭제 API
*/
exports.deleteLabel = async(req, res, next) => {
    try {
        const { id } = req.params;
        const result = await labelServices.deleteLabel({ id });
        res.json({
            message: '라벨 삭제 성공',
            data: result // affected rows 개수
        });
    } catch (error) {
        next(error);
    }
};