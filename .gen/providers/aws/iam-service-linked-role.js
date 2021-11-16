"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html
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
exports.IamServiceLinkedRole = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html aws_iam_service_linked_role}
*/
var IamServiceLinkedRole = /** @class */ (function (_super) {
    __extends(IamServiceLinkedRole, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html aws_iam_service_linked_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamServiceLinkedRoleConfig
    */
    function IamServiceLinkedRole(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_service_linked_role',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._awsServiceName = config.awsServiceName;
        _this._customSuffix = config.customSuffix;
        _this._description = config.description;
        return _this;
    }
    Object.defineProperty(IamServiceLinkedRole.prototype, "arn", {
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
    Object.defineProperty(IamServiceLinkedRole.prototype, "awsServiceName", {
        get: function () {
            return this.getStringAttribute('aws_service_name');
        },
        set: function (value) {
            this._awsServiceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServiceLinkedRole.prototype, "awsServiceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsServiceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServiceLinkedRole.prototype, "createDate", {
        // create_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('create_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServiceLinkedRole.prototype, "customSuffix", {
        get: function () {
            return this.getStringAttribute('custom_suffix');
        },
        set: function (value) {
            this._customSuffix = value;
        },
        enumerable: false,
        configurable: true
    });
    IamServiceLinkedRole.prototype.resetCustomSuffix = function () {
        this._customSuffix = undefined;
    };
    Object.defineProperty(IamServiceLinkedRole.prototype, "customSuffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customSuffix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServiceLinkedRole.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    IamServiceLinkedRole.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(IamServiceLinkedRole.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServiceLinkedRole.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServiceLinkedRole.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServiceLinkedRole.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServiceLinkedRole.prototype, "uniqueId", {
        // unique_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('unique_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IamServiceLinkedRole.prototype.synthesizeAttributes = function () {
        return {
            aws_service_name: cdktf.stringToTerraform(this._awsServiceName),
            custom_suffix: cdktf.stringToTerraform(this._customSuffix),
            description: cdktf.stringToTerraform(this._description)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamServiceLinkedRole.tfResourceType = "aws_iam_service_linked_role";
    return IamServiceLinkedRole;
}(cdktf.TerraformResource));
exports.IamServiceLinkedRole = IamServiceLinkedRole;
