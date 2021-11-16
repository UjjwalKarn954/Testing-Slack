"use strict";
// https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html
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
exports.DocdbClusterInstance = void 0;
var cdktf = require("cdktf");
function docdbClusterInstanceTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html aws_docdb_cluster_instance}
*/
var DocdbClusterInstance = /** @class */ (function (_super) {
    __extends(DocdbClusterInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html aws_docdb_cluster_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterInstanceConfig
    */
    function DocdbClusterInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_docdb_cluster_instance',
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
        _this._caCertIdentifier = config.caCertIdentifier;
        _this._clusterIdentifier = config.clusterIdentifier;
        _this._engine = config.engine;
        _this._identifier = config.identifier;
        _this._identifierPrefix = config.identifierPrefix;
        _this._instanceClass = config.instanceClass;
        _this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        _this._promotionTier = config.promotionTier;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DocdbClusterInstance.prototype, "applyImmediately", {
        get: function () {
            return this.getBooleanAttribute('apply_immediately');
        },
        set: function (value) {
            this._applyImmediately = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterInstance.prototype.resetApplyImmediately = function () {
        this._applyImmediately = undefined;
    };
    Object.defineProperty(DocdbClusterInstance.prototype, "applyImmediatelyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applyImmediately;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "autoMinorVersionUpgrade", {
        get: function () {
            return this.getBooleanAttribute('auto_minor_version_upgrade');
        },
        set: function (value) {
            this._autoMinorVersionUpgrade = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterInstance.prototype.resetAutoMinorVersionUpgrade = function () {
        this._autoMinorVersionUpgrade = undefined;
    };
    Object.defineProperty(DocdbClusterInstance.prototype, "autoMinorVersionUpgradeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoMinorVersionUpgrade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterInstance.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(DocdbClusterInstance.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "caCertIdentifier", {
        get: function () {
            return this.getStringAttribute('ca_cert_identifier');
        },
        set: function (value) {
            this._caCertIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterInstance.prototype.resetCaCertIdentifier = function () {
        this._caCertIdentifier = undefined;
    };
    Object.defineProperty(DocdbClusterInstance.prototype, "caCertIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caCertIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "clusterIdentifier", {
        get: function () {
            return this.getStringAttribute('cluster_identifier');
        },
        set: function (value) {
            this._clusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "clusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "dbSubnetGroupName", {
        // db_subnet_group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_subnet_group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "dbiResourceId", {
        // dbi_resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dbi_resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterInstance.prototype.resetEngine = function () {
        this._engine = undefined;
    };
    Object.defineProperty(DocdbClusterInstance.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "engineVersion", {
        // engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterInstance.prototype.resetIdentifier = function () {
        this._identifier = undefined;
    };
    Object.defineProperty(DocdbClusterInstance.prototype, "identifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "identifierPrefix", {
        get: function () {
            return this.getStringAttribute('identifier_prefix');
        },
        set: function (value) {
            this._identifierPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterInstance.prototype.resetIdentifierPrefix = function () {
        this._identifierPrefix = undefined;
    };
    Object.defineProperty(DocdbClusterInstance.prototype, "identifierPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifierPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "instanceClass", {
        get: function () {
            return this.getStringAttribute('instance_class');
        },
        set: function (value) {
            this._instanceClass = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "instanceClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "preferredBackupWindow", {
        // preferred_backup_window - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preferred_backup_window');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "preferredMaintenanceWindow", {
        get: function () {
            return this.getStringAttribute('preferred_maintenance_window');
        },
        set: function (value) {
            this._preferredMaintenanceWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterInstance.prototype.resetPreferredMaintenanceWindow = function () {
        this._preferredMaintenanceWindow = undefined;
    };
    Object.defineProperty(DocdbClusterInstance.prototype, "preferredMaintenanceWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredMaintenanceWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "promotionTier", {
        get: function () {
            return this.getNumberAttribute('promotion_tier');
        },
        set: function (value) {
            this._promotionTier = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterInstance.prototype.resetPromotionTier = function () {
        this._promotionTier = undefined;
    };
    Object.defineProperty(DocdbClusterInstance.prototype, "promotionTierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._promotionTier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "publiclyAccessible", {
        // publicly_accessible - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('publicly_accessible');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "storageEncrypted", {
        // storage_encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('storage_encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterInstance.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DocdbClusterInstance.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterInstance.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DocdbClusterInstance.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "writer", {
        // writer - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('writer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterInstance.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterInstance.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DocdbClusterInstance.prototype, "timeoutsInput", {
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
    DocdbClusterInstance.prototype.synthesizeAttributes = function () {
        return {
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            ca_cert_identifier: cdktf.stringToTerraform(this._caCertIdentifier),
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            engine: cdktf.stringToTerraform(this._engine),
            identifier: cdktf.stringToTerraform(this._identifier),
            identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
            instance_class: cdktf.stringToTerraform(this._instanceClass),
            preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
            promotion_tier: cdktf.numberToTerraform(this._promotionTier),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: docdbClusterInstanceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DocdbClusterInstance.tfResourceType = "aws_docdb_cluster_instance";
    return DocdbClusterInstance;
}(cdktf.TerraformResource));
exports.DocdbClusterInstance = DocdbClusterInstance;
