"use strict";
// https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html
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
exports.DataAwsWorkspacesBundle = exports.DataAwsWorkspacesBundleUserStorage = exports.DataAwsWorkspacesBundleRootStorage = exports.DataAwsWorkspacesBundleComputeType = void 0;
var cdktf = require("cdktf");
var DataAwsWorkspacesBundleComputeType = /** @class */ (function (_super) {
    __extends(DataAwsWorkspacesBundleComputeType, _super);
    function DataAwsWorkspacesBundleComputeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsWorkspacesBundleComputeType.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsWorkspacesBundleComputeType;
}(cdktf.ComplexComputedList));
exports.DataAwsWorkspacesBundleComputeType = DataAwsWorkspacesBundleComputeType;
var DataAwsWorkspacesBundleRootStorage = /** @class */ (function (_super) {
    __extends(DataAwsWorkspacesBundleRootStorage, _super);
    function DataAwsWorkspacesBundleRootStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsWorkspacesBundleRootStorage.prototype, "capacity", {
        // capacity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('capacity');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsWorkspacesBundleRootStorage;
}(cdktf.ComplexComputedList));
exports.DataAwsWorkspacesBundleRootStorage = DataAwsWorkspacesBundleRootStorage;
var DataAwsWorkspacesBundleUserStorage = /** @class */ (function (_super) {
    __extends(DataAwsWorkspacesBundleUserStorage, _super);
    function DataAwsWorkspacesBundleUserStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsWorkspacesBundleUserStorage.prototype, "capacity", {
        // capacity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('capacity');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsWorkspacesBundleUserStorage;
}(cdktf.ComplexComputedList));
exports.DataAwsWorkspacesBundleUserStorage = DataAwsWorkspacesBundleUserStorage;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html aws_workspaces_bundle}
*/
var DataAwsWorkspacesBundle = /** @class */ (function (_super) {
    __extends(DataAwsWorkspacesBundle, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html aws_workspaces_bundle} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesBundleConfig = {}
    */
    function DataAwsWorkspacesBundle(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_workspaces_bundle',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bundleId = config.bundleId;
        _this._name = config.name;
        _this._owner = config.owner;
        return _this;
    }
    Object.defineProperty(DataAwsWorkspacesBundle.prototype, "bundleId", {
        get: function () {
            return this.getStringAttribute('bundle_id');
        },
        set: function (value) {
            this._bundleId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsWorkspacesBundle.prototype.resetBundleId = function () {
        this._bundleId = undefined;
    };
    Object.defineProperty(DataAwsWorkspacesBundle.prototype, "bundleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bundleId;
        },
        enumerable: false,
        configurable: true
    });
    // compute_type - computed: true, optional: false, required: false
    DataAwsWorkspacesBundle.prototype.computeType = function (index) {
        return new DataAwsWorkspacesBundleComputeType(this, 'compute_type', index);
    };
    Object.defineProperty(DataAwsWorkspacesBundle.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesBundle.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesBundle.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsWorkspacesBundle.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsWorkspacesBundle.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWorkspacesBundle.prototype, "owner", {
        get: function () {
            return this.getStringAttribute('owner');
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsWorkspacesBundle.prototype.resetOwner = function () {
        this._owner = undefined;
    };
    Object.defineProperty(DataAwsWorkspacesBundle.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    // root_storage - computed: true, optional: false, required: false
    DataAwsWorkspacesBundle.prototype.rootStorage = function (index) {
        return new DataAwsWorkspacesBundleRootStorage(this, 'root_storage', index);
    };
    // user_storage - computed: true, optional: false, required: false
    DataAwsWorkspacesBundle.prototype.userStorage = function (index) {
        return new DataAwsWorkspacesBundleUserStorage(this, 'user_storage', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsWorkspacesBundle.prototype.synthesizeAttributes = function () {
        return {
            bundle_id: cdktf.stringToTerraform(this._bundleId),
            name: cdktf.stringToTerraform(this._name),
            owner: cdktf.stringToTerraform(this._owner)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsWorkspacesBundle.tfResourceType = "aws_workspaces_bundle";
    return DataAwsWorkspacesBundle;
}(cdktf.TerraformDataSource));
exports.DataAwsWorkspacesBundle = DataAwsWorkspacesBundle;
