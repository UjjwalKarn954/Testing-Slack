"use strict";
// https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html
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
exports.PinpointApp = void 0;
var cdktf = require("cdktf");
function pinpointAppCampaignHookToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        lambda_function_name: cdktf.stringToTerraform(struct.lambdaFunctionName),
        mode: cdktf.stringToTerraform(struct.mode),
        web_url: cdktf.stringToTerraform(struct.webUrl)
    };
}
function pinpointAppLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        daily: cdktf.numberToTerraform(struct.daily),
        maximum_duration: cdktf.numberToTerraform(struct.maximumDuration),
        messages_per_second: cdktf.numberToTerraform(struct.messagesPerSecond),
        total: cdktf.numberToTerraform(struct.total)
    };
}
function pinpointAppQuietTimeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html aws_pinpoint_app}
*/
var PinpointApp = /** @class */ (function (_super) {
    __extends(PinpointApp, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html aws_pinpoint_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointAppConfig = {}
    */
    function PinpointApp(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_pinpoint_app',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._campaignHook = config.campaignHook;
        _this._limits = config.limits;
        _this._quietTime = config.quietTime;
        return _this;
    }
    Object.defineProperty(PinpointApp.prototype, "applicationId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // application_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('application_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApp.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApp.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApp.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApp.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(PinpointApp.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApp.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApp.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(PinpointApp.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApp.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApp.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(PinpointApp.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApp.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApp.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(PinpointApp.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApp.prototype, "campaignHook", {
        get: function () {
            return this.interpolationForAttribute('campaign_hook');
        },
        set: function (value) {
            this._campaignHook = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApp.prototype.resetCampaignHook = function () {
        this._campaignHook = undefined;
    };
    Object.defineProperty(PinpointApp.prototype, "campaignHookInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._campaignHook;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApp.prototype, "limits", {
        get: function () {
            return this.interpolationForAttribute('limits');
        },
        set: function (value) {
            this._limits = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApp.prototype.resetLimits = function () {
        this._limits = undefined;
    };
    Object.defineProperty(PinpointApp.prototype, "limitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PinpointApp.prototype, "quietTime", {
        get: function () {
            return this.interpolationForAttribute('quiet_time');
        },
        set: function (value) {
            this._quietTime = value;
        },
        enumerable: false,
        configurable: true
    });
    PinpointApp.prototype.resetQuietTime = function () {
        this._quietTime = undefined;
    };
    Object.defineProperty(PinpointApp.prototype, "quietTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._quietTime;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    PinpointApp.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            campaign_hook: cdktf.listMapper(pinpointAppCampaignHookToTerraform)(this._campaignHook),
            limits: cdktf.listMapper(pinpointAppLimitsToTerraform)(this._limits),
            quiet_time: cdktf.listMapper(pinpointAppQuietTimeToTerraform)(this._quietTime)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    PinpointApp.tfResourceType = "aws_pinpoint_app";
    return PinpointApp;
}(cdktf.TerraformResource));
exports.PinpointApp = PinpointApp;
