"use strict";
// https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.GameliftGameSessionQueue = void 0;
var cdktf = require("cdktf");
function gameliftGameSessionQueuePlayerLatencyPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        maximum_individual_player_latency_milliseconds: cdktf.numberToTerraform(struct.maximumIndividualPlayerLatencyMilliseconds),
        policy_duration_seconds: cdktf.numberToTerraform(struct.policyDurationSeconds)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html aws_gamelift_game_session_queue}
*/
var GameliftGameSessionQueue = /** @class */ (function (_super) {
    __extends(GameliftGameSessionQueue, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html aws_gamelift_game_session_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftGameSessionQueueConfig
    */
    function GameliftGameSessionQueue(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_gamelift_game_session_queue',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._destinations = config.destinations;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeoutInSeconds = config.timeoutInSeconds;
        _this._playerLatencyPolicy = config.playerLatencyPolicy;
        return _this;
    }
    Object.defineProperty(GameliftGameSessionQueue.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftGameSessionQueue.prototype, "destinations", {
        get: function () {
            return this.getListAttribute('destinations');
        },
        set: function (value) {
            this._destinations = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftGameSessionQueue.prototype.resetDestinations = function () {
        this._destinations = undefined;
    };
    Object.defineProperty(GameliftGameSessionQueue.prototype, "destinationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftGameSessionQueue.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftGameSessionQueue.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftGameSessionQueue.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftGameSessionQueue.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftGameSessionQueue.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GameliftGameSessionQueue.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftGameSessionQueue.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftGameSessionQueue.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GameliftGameSessionQueue.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftGameSessionQueue.prototype, "timeoutInSeconds", {
        get: function () {
            return this.getNumberAttribute('timeout_in_seconds');
        },
        set: function (value) {
            this._timeoutInSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftGameSessionQueue.prototype.resetTimeoutInSeconds = function () {
        this._timeoutInSeconds = undefined;
    };
    Object.defineProperty(GameliftGameSessionQueue.prototype, "timeoutInSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeoutInSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftGameSessionQueue.prototype, "playerLatencyPolicy", {
        get: function () {
            return this.interpolationForAttribute('player_latency_policy');
        },
        set: function (value) {
            this._playerLatencyPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftGameSessionQueue.prototype.resetPlayerLatencyPolicy = function () {
        this._playerLatencyPolicy = undefined;
    };
    Object.defineProperty(GameliftGameSessionQueue.prototype, "playerLatencyPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._playerLatencyPolicy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GameliftGameSessionQueue.prototype.synthesizeAttributes = function () {
        return {
            destinations: cdktf.listMapper(cdktf.stringToTerraform)(this._destinations),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeout_in_seconds: cdktf.numberToTerraform(this._timeoutInSeconds),
            player_latency_policy: cdktf.listMapper(gameliftGameSessionQueuePlayerLatencyPolicyToTerraform)(this._playerLatencyPolicy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GameliftGameSessionQueue.tfResourceType = "aws_gamelift_game_session_queue";
    return GameliftGameSessionQueue;
}(cdktf.TerraformResource));
exports.GameliftGameSessionQueue = GameliftGameSessionQueue;
