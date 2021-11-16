"use strict";
// https://www.terraform.io/docs/providers/aws/r/devicefarm_project.html
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
exports.DevicefarmProject = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_project.html aws_devicefarm_project}
*/
var DevicefarmProject = /** @class */ (function (_super) {
    __extends(DevicefarmProject, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_project.html aws_devicefarm_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DevicefarmProjectConfig
    */
    function DevicefarmProject(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_devicefarm_project',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._defaultJobTimeoutMinutes = config.defaultJobTimeoutMinutes;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(DevicefarmProject.prototype, "arn", {
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
    Object.defineProperty(DevicefarmProject.prototype, "defaultJobTimeoutMinutes", {
        get: function () {
            return this.getNumberAttribute('default_job_timeout_minutes');
        },
        set: function (value) {
            this._defaultJobTimeoutMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    DevicefarmProject.prototype.resetDefaultJobTimeoutMinutes = function () {
        this._defaultJobTimeoutMinutes = undefined;
    };
    Object.defineProperty(DevicefarmProject.prototype, "defaultJobTimeoutMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultJobTimeoutMinutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevicefarmProject.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevicefarmProject.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevicefarmProject.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevicefarmProject.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DevicefarmProject.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DevicefarmProject.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DevicefarmProject.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DevicefarmProject.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DevicefarmProject.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DevicefarmProject.prototype.synthesizeAttributes = function () {
        return {
            default_job_timeout_minutes: cdktf.numberToTerraform(this._defaultJobTimeoutMinutes),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DevicefarmProject.tfResourceType = "aws_devicefarm_project";
    return DevicefarmProject;
}(cdktf.TerraformResource));
exports.DevicefarmProject = DevicefarmProject;
