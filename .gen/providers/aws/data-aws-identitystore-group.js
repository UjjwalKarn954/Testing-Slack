"use strict";
// https://www.terraform.io/docs/providers/aws/d/identitystore_group.html
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
exports.DataAwsIdentitystoreGroup = void 0;
var cdktf = require("cdktf");
function dataAwsIdentitystoreGroupFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute_path: cdktf.stringToTerraform(struct.attributePath),
        attribute_value: cdktf.stringToTerraform(struct.attributeValue)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html aws_identitystore_group}
*/
var DataAwsIdentitystoreGroup = /** @class */ (function (_super) {
    __extends(DataAwsIdentitystoreGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html aws_identitystore_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIdentitystoreGroupConfig
    */
    function DataAwsIdentitystoreGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_identitystore_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._groupId = config.groupId;
        _this._identityStoreId = config.identityStoreId;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsIdentitystoreGroup.prototype, "displayName", {
        // ==========
        // ATTRIBUTES
        // ==========
        // display_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('display_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIdentitystoreGroup.prototype, "groupId", {
        get: function () {
            return this.getStringAttribute('group_id');
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIdentitystoreGroup.prototype.resetGroupId = function () {
        this._groupId = undefined;
    };
    Object.defineProperty(DataAwsIdentitystoreGroup.prototype, "groupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIdentitystoreGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIdentitystoreGroup.prototype, "identityStoreId", {
        get: function () {
            return this.getStringAttribute('identity_store_id');
        },
        set: function (value) {
            this._identityStoreId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIdentitystoreGroup.prototype, "identityStoreIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityStoreId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIdentitystoreGroup.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIdentitystoreGroup.prototype, "filterInput", {
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
    DataAwsIdentitystoreGroup.prototype.synthesizeAttributes = function () {
        return {
            group_id: cdktf.stringToTerraform(this._groupId),
            identity_store_id: cdktf.stringToTerraform(this._identityStoreId),
            filter: cdktf.listMapper(dataAwsIdentitystoreGroupFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsIdentitystoreGroup.tfResourceType = "aws_identitystore_group";
    return DataAwsIdentitystoreGroup;
}(cdktf.TerraformDataSource));
exports.DataAwsIdentitystoreGroup = DataAwsIdentitystoreGroup;
