"use strict";
// https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html
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
exports.DatasyncLocationNfs = void 0;
var cdktf = require("cdktf");
function datasyncLocationNfsMountOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        version: cdktf.stringToTerraform(struct.version)
    };
}
function datasyncLocationNfsOnPremConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.agentArns)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html aws_datasync_location_nfs}
*/
var DatasyncLocationNfs = /** @class */ (function (_super) {
    __extends(DatasyncLocationNfs, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html aws_datasync_location_nfs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationNfsConfig
    */
    function DatasyncLocationNfs(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_datasync_location_nfs',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._serverHostname = config.serverHostname;
        _this._subdirectory = config.subdirectory;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._mountOptions = config.mountOptions;
        _this._onPremConfig = config.onPremConfig;
        return _this;
    }
    Object.defineProperty(DatasyncLocationNfs.prototype, "arn", {
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
    Object.defineProperty(DatasyncLocationNfs.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationNfs.prototype, "serverHostname", {
        get: function () {
            return this.getStringAttribute('server_hostname');
        },
        set: function (value) {
            this._serverHostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationNfs.prototype, "serverHostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverHostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationNfs.prototype, "subdirectory", {
        get: function () {
            return this.getStringAttribute('subdirectory');
        },
        set: function (value) {
            this._subdirectory = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationNfs.prototype, "subdirectoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subdirectory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationNfs.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationNfs.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DatasyncLocationNfs.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationNfs.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationNfs.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DatasyncLocationNfs.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationNfs.prototype, "uri", {
        // uri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uri');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationNfs.prototype, "mountOptions", {
        get: function () {
            return this.interpolationForAttribute('mount_options');
        },
        set: function (value) {
            this._mountOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncLocationNfs.prototype.resetMountOptions = function () {
        this._mountOptions = undefined;
    };
    Object.defineProperty(DatasyncLocationNfs.prototype, "mountOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mountOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationNfs.prototype, "onPremConfig", {
        get: function () {
            return this.interpolationForAttribute('on_prem_config');
        },
        set: function (value) {
            this._onPremConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncLocationNfs.prototype, "onPremConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._onPremConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DatasyncLocationNfs.prototype.synthesizeAttributes = function () {
        return {
            server_hostname: cdktf.stringToTerraform(this._serverHostname),
            subdirectory: cdktf.stringToTerraform(this._subdirectory),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            mount_options: cdktf.listMapper(datasyncLocationNfsMountOptionsToTerraform)(this._mountOptions),
            on_prem_config: cdktf.listMapper(datasyncLocationNfsOnPremConfigToTerraform)(this._onPremConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DatasyncLocationNfs.tfResourceType = "aws_datasync_location_nfs";
    return DatasyncLocationNfs;
}(cdktf.TerraformResource));
exports.DatasyncLocationNfs = DatasyncLocationNfs;
