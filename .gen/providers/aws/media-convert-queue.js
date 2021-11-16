"use strict";
// https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html
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
exports.MediaConvertQueue = void 0;
var cdktf = require("cdktf");
function mediaConvertQueueReservationPlanSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        commitment: cdktf.stringToTerraform(struct.commitment),
        renewal_type: cdktf.stringToTerraform(struct.renewalType),
        reserved_slots: cdktf.numberToTerraform(struct.reservedSlots)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html aws_media_convert_queue}
*/
var MediaConvertQueue = /** @class */ (function (_super) {
    __extends(MediaConvertQueue, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html aws_media_convert_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaConvertQueueConfig
    */
    function MediaConvertQueue(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_media_convert_queue',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._name = config.name;
        _this._pricingPlan = config.pricingPlan;
        _this._status = config.status;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._reservationPlanSettings = config.reservationPlanSettings;
        return _this;
    }
    Object.defineProperty(MediaConvertQueue.prototype, "arn", {
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
    Object.defineProperty(MediaConvertQueue.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    MediaConvertQueue.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(MediaConvertQueue.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaConvertQueue.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaConvertQueue.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaConvertQueue.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaConvertQueue.prototype, "pricingPlan", {
        get: function () {
            return this.getStringAttribute('pricing_plan');
        },
        set: function (value) {
            this._pricingPlan = value;
        },
        enumerable: false,
        configurable: true
    });
    MediaConvertQueue.prototype.resetPricingPlan = function () {
        this._pricingPlan = undefined;
    };
    Object.defineProperty(MediaConvertQueue.prototype, "pricingPlanInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pricingPlan;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaConvertQueue.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    MediaConvertQueue.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(MediaConvertQueue.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaConvertQueue.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    MediaConvertQueue.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(MediaConvertQueue.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaConvertQueue.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    MediaConvertQueue.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(MediaConvertQueue.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaConvertQueue.prototype, "reservationPlanSettings", {
        get: function () {
            return this.interpolationForAttribute('reservation_plan_settings');
        },
        set: function (value) {
            this._reservationPlanSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    MediaConvertQueue.prototype.resetReservationPlanSettings = function () {
        this._reservationPlanSettings = undefined;
    };
    Object.defineProperty(MediaConvertQueue.prototype, "reservationPlanSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reservationPlanSettings;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MediaConvertQueue.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            pricing_plan: cdktf.stringToTerraform(this._pricingPlan),
            status: cdktf.stringToTerraform(this._status),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            reservation_plan_settings: cdktf.listMapper(mediaConvertQueueReservationPlanSettingsToTerraform)(this._reservationPlanSettings)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    MediaConvertQueue.tfResourceType = "aws_media_convert_queue";
    return MediaConvertQueue;
}(cdktf.TerraformResource));
exports.MediaConvertQueue = MediaConvertQueue;
