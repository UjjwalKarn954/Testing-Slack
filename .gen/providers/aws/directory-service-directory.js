"use strict";
// https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html
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
exports.DirectoryServiceDirectory = void 0;
var cdktf = require("cdktf");
function directoryServiceDirectoryConnectSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        customer_dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct.customerDnsIps),
        customer_username: cdktf.stringToTerraform(struct.customerUsername),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
        vpc_id: cdktf.stringToTerraform(struct.vpcId)
    };
}
function directoryServiceDirectoryVpcSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
        vpc_id: cdktf.stringToTerraform(struct.vpcId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html aws_directory_service_directory}
*/
var DirectoryServiceDirectory = /** @class */ (function (_super) {
    __extends(DirectoryServiceDirectory, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html aws_directory_service_directory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceDirectoryConfig
    */
    function DirectoryServiceDirectory(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_directory_service_directory',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._alias = config.alias;
        _this._description = config.description;
        _this._edition = config.edition;
        _this._enableSso = config.enableSso;
        _this._name = config.name;
        _this._password = config.password;
        _this._shortName = config.shortName;
        _this._size = config.size;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        _this._connectSettings = config.connectSettings;
        _this._vpcSettings = config.vpcSettings;
        return _this;
    }
    Object.defineProperty(DirectoryServiceDirectory.prototype, "accessUrl", {
        // ==========
        // ATTRIBUTES
        // ==========
        // access_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('access_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "alias", {
        get: function () {
            return this.getStringAttribute('alias');
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    DirectoryServiceDirectory.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(DirectoryServiceDirectory.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DirectoryServiceDirectory.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DirectoryServiceDirectory.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "dnsIpAddresses", {
        // dns_ip_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dns_ip_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "edition", {
        get: function () {
            return this.getStringAttribute('edition');
        },
        set: function (value) {
            this._edition = value;
        },
        enumerable: false,
        configurable: true
    });
    DirectoryServiceDirectory.prototype.resetEdition = function () {
        this._edition = undefined;
    };
    Object.defineProperty(DirectoryServiceDirectory.prototype, "editionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._edition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "enableSso", {
        get: function () {
            return this.getBooleanAttribute('enable_sso');
        },
        set: function (value) {
            this._enableSso = value;
        },
        enumerable: false,
        configurable: true
    });
    DirectoryServiceDirectory.prototype.resetEnableSso = function () {
        this._enableSso = undefined;
    };
    Object.defineProperty(DirectoryServiceDirectory.prototype, "enableSsoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableSso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "securityGroupId", {
        // security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "shortName", {
        get: function () {
            return this.getStringAttribute('short_name');
        },
        set: function (value) {
            this._shortName = value;
        },
        enumerable: false,
        configurable: true
    });
    DirectoryServiceDirectory.prototype.resetShortName = function () {
        this._shortName = undefined;
    };
    Object.defineProperty(DirectoryServiceDirectory.prototype, "shortNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shortName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "size", {
        get: function () {
            return this.getStringAttribute('size');
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    DirectoryServiceDirectory.prototype.resetSize = function () {
        this._size = undefined;
    };
    Object.defineProperty(DirectoryServiceDirectory.prototype, "sizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DirectoryServiceDirectory.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DirectoryServiceDirectory.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DirectoryServiceDirectory.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DirectoryServiceDirectory.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    DirectoryServiceDirectory.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(DirectoryServiceDirectory.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "connectSettings", {
        get: function () {
            return this.interpolationForAttribute('connect_settings');
        },
        set: function (value) {
            this._connectSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    DirectoryServiceDirectory.prototype.resetConnectSettings = function () {
        this._connectSettings = undefined;
    };
    Object.defineProperty(DirectoryServiceDirectory.prototype, "connectSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceDirectory.prototype, "vpcSettings", {
        get: function () {
            return this.interpolationForAttribute('vpc_settings');
        },
        set: function (value) {
            this._vpcSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    DirectoryServiceDirectory.prototype.resetVpcSettings = function () {
        this._vpcSettings = undefined;
    };
    Object.defineProperty(DirectoryServiceDirectory.prototype, "vpcSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSettings;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DirectoryServiceDirectory.prototype.synthesizeAttributes = function () {
        return {
            alias: cdktf.stringToTerraform(this._alias),
            description: cdktf.stringToTerraform(this._description),
            edition: cdktf.stringToTerraform(this._edition),
            enable_sso: cdktf.booleanToTerraform(this._enableSso),
            name: cdktf.stringToTerraform(this._name),
            password: cdktf.stringToTerraform(this._password),
            short_name: cdktf.stringToTerraform(this._shortName),
            size: cdktf.stringToTerraform(this._size),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            connect_settings: cdktf.listMapper(directoryServiceDirectoryConnectSettingsToTerraform)(this._connectSettings),
            vpc_settings: cdktf.listMapper(directoryServiceDirectoryVpcSettingsToTerraform)(this._vpcSettings)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DirectoryServiceDirectory.tfResourceType = "aws_directory_service_directory";
    return DirectoryServiceDirectory;
}(cdktf.TerraformResource));
exports.DirectoryServiceDirectory = DirectoryServiceDirectory;
