"use strict";
// https://www.terraform.io/docs/providers/aws/d/identitystore_user.html
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
exports.DataAwsIdentitystoreUser = void 0;
var cdktf = require("cdktf");
function dataAwsIdentitystoreUserFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute_path: cdktf.stringToTerraform(struct.attributePath),
        attribute_value: cdktf.stringToTerraform(struct.attributeValue)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user.html aws_identitystore_user}
*/
var DataAwsIdentitystoreUser = /** @class */ (function (_super) {
    __extends(DataAwsIdentitystoreUser, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user.html aws_identitystore_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIdentitystoreUserConfig
    */
    function DataAwsIdentitystoreUser(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_identitystore_user',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._identityStoreId = config.identityStoreId;
        _this._userId = config.userId;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsIdentitystoreUser.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIdentitystoreUser.prototype, "identityStoreId", {
        get: function () {
            return this.getStringAttribute('identity_store_id');
        },
        set: function (value) {
            this._identityStoreId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIdentitystoreUser.prototype, "identityStoreIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityStoreId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIdentitystoreUser.prototype, "userId", {
        get: function () {
            return this.getStringAttribute('user_id');
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIdentitystoreUser.prototype.resetUserId = function () {
        this._userId = undefined;
    };
    Object.defineProperty(DataAwsIdentitystoreUser.prototype, "userIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIdentitystoreUser.prototype, "userName", {
        // user_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIdentitystoreUser.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIdentitystoreUser.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsIdentitystoreUser.prototype.synthesizeAttributes = function () {
        return {
            identity_store_id: cdktf.stringToTerraform(this._identityStoreId),
            user_id: cdktf.stringToTerraform(this._userId),
            filter: cdktf.listMapper(dataAwsIdentitystoreUserFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsIdentitystoreUser.tfResourceType = "aws_identitystore_user";
    return DataAwsIdentitystoreUser;
}(cdktf.TerraformDataSource));
exports.DataAwsIdentitystoreUser = DataAwsIdentitystoreUser;
