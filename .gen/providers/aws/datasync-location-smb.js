"use strict";
// https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html
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
exports.DatasyncLocationSmb = void 0;
var cdktf = require("cdktf");
function datasyncLocationSmbMountOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        version: cdktf.stringToTerraform(struct.version)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html aws_datasync_location_smb}
*/
var DatasyncLocationSmb = /** @class */ (function (_super) {
    __extends(DatasyncLocationSmb, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html aws_datasync_location_smb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationSmbConfig
    */
    function DatasyncLocationSmb(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_datasync_location_smb',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._agentArns = config.agentArns;
        _this._domain = config.domain;
        _this._password = config.password;
        _this._serverHostname = config.serverHostname;
        _this._subdirectory = config.subdirectory;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._user = config.user;
        _this._mountOptions = config.mountOptions;
        return _this;
    }
    Object.defineProperty(DatasyncLocationSmb.prototype, "agentArns", {
        get: function () {
            return this.getListAttribute('agent_arns');
        },
        set: function (value) {
            this._agentArns = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "agentArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._agentArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationSmb.prototype.resetDomain = function () {
        this._domain = undefined;
    };
    Object.defineProperty(DatasyncLocationSmb.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "serverHostname", {
        get: function () {
            return this.getStringAttribute('server_hostname');
        },
        set: function (value) {
            this._serverHostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "serverHostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverHostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "subdirectory", {
        get: function () {
            return this.getStringAttribute('subdirectory');
        },
        set: function (value) {
            this._subdirectory = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "subdirectoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subdirectory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationSmb.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DatasyncLocationSmb.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationSmb.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DatasyncLocationSmb.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "uri", {
        // uri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uri');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "user", {
        get: function () {
            return this.getStringAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationSmb.prototype, "mountOptions", {
        get: function () {
            return this.interpolationForAttribute('mount_options');
        },
        set: function (value) {
            this._mountOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationSmb.prototype.resetMountOptions = function () {
        this._mountOptions = undefined;
    };
    Object.defineProperty(DatasyncLocationSmb.prototype, "mountOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mountOptions;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DatasyncLocationSmb.prototype.synthesizeAttributes = function () {
        return {
            agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._agentArns),
            domain: cdktf.stringToTerraform(this._domain),
            password: cdktf.stringToTerraform(this._password),
            server_hostname: cdktf.stringToTerraform(this._serverHostname),
            subdirectory: cdktf.stringToTerraform(this._subdirectory),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            user: cdktf.stringToTerraform(this._user),
            mount_options: cdktf.listMapper(datasyncLocationSmbMountOptionsToTerraform)(this._mountOptions)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DatasyncLocationSmb.tfResourceType = "aws_datasync_location_smb";
    return DatasyncLocationSmb;
}(cdktf.TerraformResource));
exports.DatasyncLocationSmb = DatasyncLocationSmb;
