"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html
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
exports.SsoadminPermissionSet = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html aws_ssoadmin_permission_set}
*/
var SsoadminPermissionSet = /** @class */ (function (_super) {
    __extends(SsoadminPermissionSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html aws_ssoadmin_permission_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminPermissionSetConfig
    */
    function SsoadminPermissionSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssoadmin_permission_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._instanceArn = config.instanceArn;
        _this._name = config.name;
        _this._relayState = config.relayState;
        _this._sessionDuration = config.sessionDuration;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(SsoadminPermissionSet.prototype, "arn", {
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
    Object.defineProperty(SsoadminPermissionSet.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSet.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SsoadminPermissionSet.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SsoadminPermissionSet.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSet.prototype, "instanceArn", {
        get: function () {
            return this.getStringAttribute('instance_arn');
        },
        set: function (value) {
            this._instanceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSet.prototype, "instanceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSet.prototype, "relayState", {
        get: function () {
            return this.getStringAttribute('relay_state');
        },
        set: function (value) {
            this._relayState = value;
        },
        enumerable: false,
        configurable: true
    });
    SsoadminPermissionSet.prototype.resetRelayState = function () {
        this._relayState = undefined;
    };
    Object.defineProperty(SsoadminPermissionSet.prototype, "relayStateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._relayState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSet.prototype, "sessionDuration", {
        get: function () {
            return this.getStringAttribute('session_duration');
        },
        set: function (value) {
            this._sessionDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    SsoadminPermissionSet.prototype.resetSessionDuration = function () {
        this._sessionDuration = undefined;
    };
    Object.defineProperty(SsoadminPermissionSet.prototype, "sessionDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SsoadminPermissionSet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SsoadminPermissionSet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSet.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SsoadminPermissionSet.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SsoadminPermissionSet.prototype, "tagsAllInput", {
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
    SsoadminPermissionSet.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            instance_arn: cdktf.stringToTerraform(this._instanceArn),
            name: cdktf.stringToTerraform(this._name),
            relay_state: cdktf.stringToTerraform(this._relayState),
            session_duration: cdktf.stringToTerraform(this._sessionDuration),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsoadminPermissionSet.tfResourceType = "aws_ssoadmin_permission_set";
    return SsoadminPermissionSet;
}(cdktf.TerraformResource));
exports.SsoadminPermissionSet = SsoadminPermissionSet;
