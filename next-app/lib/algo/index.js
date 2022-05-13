var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { randomUUID } from "crypto";
import useWeb3Storage from "../../hooks/useWeb3Storage";
var FileDao = /** @class */ (function () {
    function FileDao() {
        this.store = useWeb3Storage();
    }
    FileDao.prototype.createProposal = function (_a) {
        var params = __rest(_a, []);
        return __awaiter(this, void 0, void 0, function () {
            var proposalId, proposal, ready, _b, cid, uri, info;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        proposalId = randomUUID();
                        proposal = JSON.stringify({
                            proposalId: proposalId,
                            createdBy: params.sender,
                            createdAt: Date.now,
                            blockNumber: params.block,
                            previousHash: null,
                            title: params.title,
                            description: params.description,
                        });
                        ready = new File([proposal], "".concat(proposalId, ".json"));
                        return [4 /*yield*/, this.store(ready)];
                    case 1:
                        _b = _c.sent(), cid = _b.cid, uri = _b.uri, info = _b.info;
                        this.track({ cid: cid, uri: uri });
                        return [2 /*return*/];
                }
            });
        });
    };
    FileDao.prototype.vote = function (_a) {
        var params = __rest(_a, []);
        return __awaiter(this, void 0, void 0, function () {
            var voteId, sender, vote, _b, _c, ready, _d, cid, uri, info;
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        voteId = randomUUID();
                        sender = params.sender;
                        _c = (_b = JSON).stringify;
                        _e = {
                            voteId: voteId,
                            createdBy: sender,
                            createdAt: Date.now
                        };
                        return [4 /*yield*/, this.getLastItem];
                    case 1:
                        vote = _c.apply(_b, [(_e.previousHash = _f.sent(),
                                _e.side = params.side,
                                _e)]);
                        ready = new File([vote], "".concat(voteId, ".json"));
                        return [4 /*yield*/, this.store(ready)];
                    case 2:
                        _d = _f.sent(), cid = _d.cid, uri = _d.uri, info = _d.info;
                        return [4 /*yield*/, this.track({ cid: cid, uri: uri, sender: sender })];
                    case 3:
                        _f.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileDao.prototype.getLastItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    FileDao.prototype.track = function (_a) {
        var params = __rest(_a, []);
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/];
            });
        });
    };
    FileDao.prototype.signTx = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    return FileDao;
}());
