"use strict";
// https://www.terraform.io/docs/providers/aws/r/gamelift_build.html
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
exports.GameliftBuild = void 0;
var cdktf = require("cdktf");
function gameliftBuildStorageLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html aws_gamelift_build}
*/
var GameliftBuild = /** @class */ (function (_super) {
    __extends(GameliftBuild, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html aws_gamelift_build} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftBuildConfig
    */
    function GameliftBuild(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_gamelift_build',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._operatingSystem = config.operatingSystem;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._version = config.version;
        _this._storageLocation = config.storageLocation;
        return _this;
    }
    Object.defineProperty(GameliftBuild.prototype, "arn", {
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
    Object.defineProperty(GameliftBuild.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftBuild.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftBuild.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftBuild.prototype, "operatingSystem", {
        get: function () {
            return this.getStringAttribute('operating_system');
        },
        set: function (value) {
            this._operatingSystem = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftBuild.prototype, "operatingSystemInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operatingSystem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftBuild.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftBuild.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GameliftBuild.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftBuild.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftBuild.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GameliftBuild.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftBuild.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftBuild.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(GameliftBuild.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftBuild.prototype, "storageLocation", {
        get: function () {
            return this.interpolationForAttribute('storage_location');
        },
        set: function (value) {
            this._storageLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftBuild.prototype, "storageLocationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageLocation;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GameliftBuild.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            operating_system: cdktf.stringToTerraform(this._operatingSystem),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            version: cdktf.stringToTerraform(this._version),
            storage_location: cdktf.listMapper(gameliftBuildStorageLocationToTerraform)(this._storageLocation)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GameliftBuild.tfResourceType = "aws_gamelift_build";
    return GameliftBuild;
}(cdktf.TerraformResource));
exports.GameliftBuild = GameliftBuild;
