"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssm_activation.html
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
exports.SsmActivation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html aws_ssm_activation}
*/
var SsmActivation = /** @class */ (function (_super) {
    __extends(SsmActivation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_activation.html aws_ssm_activation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmActivationConfig
    */
    function SsmActivation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_activation',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._expirationDate = config.expirationDate;
        _this._iamRole = config.iamRole;
        _this._name = config.name;
        _this._registrationLimit = config.registrationLimit;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(SsmActivation.prototype, "activationCode", {
        // ==========
        // ATTRIBUTES
        // ==========
        // activation_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('activation_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmActivation.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmActivation.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SsmActivation.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmActivation.prototype, "expirationDate", {
        get: function () {
            return this.getStringAttribute('expiration_date');
        },
        set: function (value) {
            this._expirationDate = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmActivation.prototype.resetExpirationDate = function () {
        this._expirationDate = undefined;
    };
    Object.defineProperty(SsmActivation.prototype, "expirationDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expirationDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmActivation.prototype, "expired", {
        // expired - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('expired');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmActivation.prototype, "iamRole", {
        get: function () {
            return this.getStringAttribute('iam_role');
        },
        set: function (value) {
            this._iamRole = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmActivation.prototype, "iamRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmActivation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmActivation.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmActivation.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SsmActivation.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmActivation.prototype, "registrationCount", {
        // registration_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('registration_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmActivation.prototype, "registrationLimit", {
        get: function () {
            return this.getNumberAttribute('registration_limit');
        },
        set: function (value) {
            this._registrationLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmActivation.prototype.resetRegistrationLimit = function () {
        this._registrationLimit = undefined;
    };
    Object.defineProperty(SsmActivation.prototype, "registrationLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._registrationLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmActivation.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmActivation.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SsmActivation.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmActivation.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmActivation.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SsmActivation.prototype, "tagsAllInput", {
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
    SsmActivation.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            expiration_date: cdktf.stringToTerraform(this._expirationDate),
            iam_role: cdktf.stringToTerraform(this._iamRole),
            name: cdktf.stringToTerraform(this._name),
            registration_limit: cdktf.numberToTerraform(this._registrationLimit),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsmActivation.tfResourceType = "aws_ssm_activation";
    return SsmActivation;
}(cdktf.TerraformResource));
exports.SsmActivation = SsmActivation;
