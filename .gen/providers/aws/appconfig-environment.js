"use strict";
// https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html
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
exports.AppconfigEnvironment = void 0;
var cdktf = require("cdktf");
function appconfigEnvironmentMonitorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_arn: cdktf.stringToTerraform(struct.alarmArn),
        alarm_role_arn: cdktf.stringToTerraform(struct.alarmRoleArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html aws_appconfig_environment}
*/
var AppconfigEnvironment = /** @class */ (function (_super) {
    __extends(AppconfigEnvironment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html aws_appconfig_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigEnvironmentConfig
    */
    function AppconfigEnvironment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appconfig_environment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applicationId = config.applicationId;
        _this._description = config.description;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._monitor = config.monitor;
        return _this;
    }
    Object.defineProperty(AppconfigEnvironment.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigEnvironment.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigEnvironment.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigEnvironment.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigEnvironment.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppconfigEnvironment.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigEnvironment.prototype, "environmentId", {
        // environment_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigEnvironment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigEnvironment.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigEnvironment.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigEnvironment.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigEnvironment.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigEnvironment.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppconfigEnvironment.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigEnvironment.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigEnvironment.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppconfigEnvironment.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigEnvironment.prototype, "monitor", {
        get: function () {
            return this.interpolationForAttribute('monitor');
        },
        set: function (value) {
            this._monitor = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigEnvironment.prototype.resetMonitor = function () {
        this._monitor = undefined;
    };
    Object.defineProperty(AppconfigEnvironment.prototype, "monitorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitor;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppconfigEnvironment.prototype.synthesizeAttributes = function () {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            monitor: cdktf.listMapper(appconfigEnvironmentMonitorToTerraform)(this._monitor)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppconfigEnvironment.tfResourceType = "aws_appconfig_environment";
    return AppconfigEnvironment;
}(cdktf.TerraformResource));
exports.AppconfigEnvironment = AppconfigEnvironment;
