"use strict";
// https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html
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
exports.NeptuneClusterInstance = void 0;
var cdktf = require("cdktf");
function neptuneClusterInstanceTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html aws_neptune_cluster_instance}
*/
var NeptuneClusterInstance = /** @class */ (function (_super) {
    __extends(NeptuneClusterInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html aws_neptune_cluster_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneClusterInstanceConfig
    */
    function NeptuneClusterInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_neptune_cluster_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applyImmediately = config.applyImmediately;
        _this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
        _this._availabilityZone = config.availabilityZone;
        _this._clusterIdentifier = config.clusterIdentifier;
        _this._engine = config.engine;
        _this._engineVersion = config.engineVersion;
        _this._identifier = config.identifier;
        _this._identifierPrefix = config.identifierPrefix;
        _this._instanceClass = config.instanceClass;
        _this._neptuneParameterGroupName = config.neptuneParameterGroupName;
        _this._neptuneSubnetGroupName = config.neptuneSubnetGroupName;
        _this._port = config.port;
        _this._preferredBackupWindow = config.preferredBackupWindow;
        _this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        _this._promotionTier = config.promotionTier;
        _this._publiclyAccessible = config.publiclyAccessible;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(NeptuneClusterInstance.prototype, "address", {
        // ==========
        // ATTRIBUTES
        // ==========
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "applyImmediately", {
        get: function () {
            return this.getBooleanAttribute('apply_immediately');
        },
        set: function (value) {
            this._applyImmediately = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetApplyImmediately = function () {
        this._applyImmediately = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "applyImmediatelyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applyImmediately;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "autoMinorVersionUpgrade", {
        get: function () {
            return this.getBooleanAttribute('auto_minor_version_upgrade');
        },
        set: function (value) {
            this._autoMinorVersionUpgrade = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetAutoMinorVersionUpgrade = function () {
        this._autoMinorVersionUpgrade = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "autoMinorVersionUpgradeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoMinorVersionUpgrade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "clusterIdentifier", {
        get: function () {
            return this.getStringAttribute('cluster_identifier');
        },
        set: function (value) {
            this._clusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "clusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "dbiResourceId", {
        // dbi_resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dbi_resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetEngine = function () {
        this._engine = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetEngineVersion = function () {
        this._engineVersion = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetIdentifier = function () {
        this._identifier = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "identifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "identifierPrefix", {
        get: function () {
            return this.getStringAttribute('identifier_prefix');
        },
        set: function (value) {
            this._identifierPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetIdentifierPrefix = function () {
        this._identifierPrefix = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "identifierPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifierPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "instanceClass", {
        get: function () {
            return this.getStringAttribute('instance_class');
        },
        set: function (value) {
            this._instanceClass = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "instanceClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "kmsKeyArn", {
        // kms_key_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "neptuneParameterGroupName", {
        get: function () {
            return this.getStringAttribute('neptune_parameter_group_name');
        },
        set: function (value) {
            this._neptuneParameterGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetNeptuneParameterGroupName = function () {
        this._neptuneParameterGroupName = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "neptuneParameterGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._neptuneParameterGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "neptuneSubnetGroupName", {
        get: function () {
            return this.getStringAttribute('neptune_subnet_group_name');
        },
        set: function (value) {
            this._neptuneSubnetGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetNeptuneSubnetGroupName = function () {
        this._neptuneSubnetGroupName = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "neptuneSubnetGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._neptuneSubnetGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "preferredBackupWindow", {
        get: function () {
            return this.getStringAttribute('preferred_backup_window');
        },
        set: function (value) {
            this._preferredBackupWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetPreferredBackupWindow = function () {
        this._preferredBackupWindow = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "preferredBackupWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredBackupWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "preferredMaintenanceWindow", {
        get: function () {
            return this.getStringAttribute('preferred_maintenance_window');
        },
        set: function (value) {
            this._preferredMaintenanceWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetPreferredMaintenanceWindow = function () {
        this._preferredMaintenanceWindow = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "preferredMaintenanceWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredMaintenanceWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "promotionTier", {
        get: function () {
            return this.getNumberAttribute('promotion_tier');
        },
        set: function (value) {
            this._promotionTier = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetPromotionTier = function () {
        this._promotionTier = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "promotionTierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._promotionTier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "publiclyAccessible", {
        get: function () {
            return this.getBooleanAttribute('publicly_accessible');
        },
        set: function (value) {
            this._publiclyAccessible = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetPubliclyAccessible = function () {
        this._publiclyAccessible = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "publiclyAccessibleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publiclyAccessible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "storageEncrypted", {
        // storage_encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('storage_encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "writer", {
        // writer - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('writer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterInstance.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterInstance.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(NeptuneClusterInstance.prototype, "timeoutsInput", {
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
    NeptuneClusterInstance.prototype.synthesizeAttributes = function () {
        return {
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            identifier: cdktf.stringToTerraform(this._identifier),
            identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
            instance_class: cdktf.stringToTerraform(this._instanceClass),
            neptune_parameter_group_name: cdktf.stringToTerraform(this._neptuneParameterGroupName),
            neptune_subnet_group_name: cdktf.stringToTerraform(this._neptuneSubnetGroupName),
            port: cdktf.numberToTerraform(this._port),
            preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
            promotion_tier: cdktf.numberToTerraform(this._promotionTier),
            publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: neptuneClusterInstanceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NeptuneClusterInstance.tfResourceType = "aws_neptune_cluster_instance";
    return NeptuneClusterInstance;
}(cdktf.TerraformResource));
exports.NeptuneClusterInstance = NeptuneClusterInstance;
