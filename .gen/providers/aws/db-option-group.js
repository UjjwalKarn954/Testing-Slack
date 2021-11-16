"use strict";
// https://www.terraform.io/docs/providers/aws/r/db_option_group.html
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
exports.DbOptionGroup = void 0;
var cdktf = require("cdktf");
function dbOptionGroupOptionOptionSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function dbOptionGroupOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        db_security_group_memberships: cdktf.listMapper(cdktf.stringToTerraform)(struct.dbSecurityGroupMemberships),
        option_name: cdktf.stringToTerraform(struct.optionName),
        port: cdktf.numberToTerraform(struct.port),
        version: cdktf.stringToTerraform(struct.version),
        vpc_security_group_memberships: cdktf.listMapper(cdktf.stringToTerraform)(struct.vpcSecurityGroupMemberships),
        option_settings: cdktf.listMapper(dbOptionGroupOptionOptionSettingsToTerraform)(struct.optionSettings)
    };
}
function dbOptionGroupTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html aws_db_option_group}
*/
var DbOptionGroup = /** @class */ (function (_super) {
    __extends(DbOptionGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html aws_db_option_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbOptionGroupConfig
    */
    function DbOptionGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_db_option_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._engineName = config.engineName;
        _this._majorEngineVersion = config.majorEngineVersion;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._optionGroupDescription = config.optionGroupDescription;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._option = config.option;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DbOptionGroup.prototype, "arn", {
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
    Object.defineProperty(DbOptionGroup.prototype, "engineName", {
        get: function () {
            return this.getStringAttribute('engine_name');
        },
        set: function (value) {
            this._engineName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbOptionGroup.prototype, "engineNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbOptionGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbOptionGroup.prototype, "majorEngineVersion", {
        get: function () {
            return this.getStringAttribute('major_engine_version');
        },
        set: function (value) {
            this._majorEngineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbOptionGroup.prototype, "majorEngineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._majorEngineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbOptionGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DbOptionGroup.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DbOptionGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbOptionGroup.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DbOptionGroup.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(DbOptionGroup.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbOptionGroup.prototype, "optionGroupDescription", {
        get: function () {
            return this.getStringAttribute('option_group_description');
        },
        set: function (value) {
            this._optionGroupDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    DbOptionGroup.prototype.resetOptionGroupDescription = function () {
        this._optionGroupDescription = undefined;
    };
    Object.defineProperty(DbOptionGroup.prototype, "optionGroupDescriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._optionGroupDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbOptionGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DbOptionGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DbOptionGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbOptionGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DbOptionGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DbOptionGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbOptionGroup.prototype, "option", {
        get: function () {
            return this.interpolationForAttribute('option');
        },
        set: function (value) {
            this._option = value;
        },
        enumerable: false,
        configurable: true
    });
    DbOptionGroup.prototype.resetOption = function () {
        this._option = undefined;
    };
    Object.defineProperty(DbOptionGroup.prototype, "optionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._option;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbOptionGroup.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DbOptionGroup.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DbOptionGroup.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DbOptionGroup.prototype.synthesizeAttributes = function () {
        return {
            engine_name: cdktf.stringToTerraform(this._engineName),
            major_engine_version: cdktf.stringToTerraform(this._majorEngineVersion),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            option_group_description: cdktf.stringToTerraform(this._optionGroupDescription),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            option: cdktf.listMapper(dbOptionGroupOptionToTerraform)(this._option),
            timeouts: dbOptionGroupTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DbOptionGroup.tfResourceType = "aws_db_option_group";
    return DbOptionGroup;
}(cdktf.TerraformResource));
exports.DbOptionGroup = DbOptionGroup;
